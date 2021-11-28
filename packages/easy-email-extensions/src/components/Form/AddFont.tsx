import { FieldArray } from 'react-final-form-arrays';
import React from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { TextField } from '.';
import { Button } from 'antd';
import { Stack, TextStyle, useBlock, useFocusIdx } from 'easy-email-editor';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { IPage } from 'easy-email-core';

export function AddFont() {
  const { focusBlock } = useBlock();
  const { focusIdx } = useFocusIdx();
  const value: IPage['data']['value'] = focusBlock?.data.value;
  return (
    <FieldArray
      name={`${focusIdx}.data.value.fonts`}
      render={(arrayHelpers) => {
        return (
          <div>
            <Stack vertical spacing='tight'>
              <Stack distribution='equalSpacing'>
                <TextStyle variation='strong'>
                  Import font <Help title='Points to a hosted css file' />
                </TextStyle>
                <Stack>
                  <Button
                    size='small'
                    icon={<PlusOutlined />}
                    onClick={() =>
                      arrayHelpers.fields.push({ name: '', href: '' })
                    }
                  />
                </Stack>
              </Stack>

              <Stack vertical spacing='extraTight'>
                {value.fonts?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Stack alignment='center' wrap={false}>
                        <Stack.Item fill>
                          <TextField
                            inline
                            name={`${focusIdx}.data.value.fonts.${index}.name`}
                            label='Name'
                          />
                        </Stack.Item>
                        <Stack.Item fill>
                          <TextField
                            inline
                            name={`${focusIdx}.data.value.fonts.${index}.href`}
                            label='Href'
                          />
                        </Stack.Item>
                        <Button
                          icon={<DeleteOutlined />}
                          onClick={() => arrayHelpers.fields.remove(index)}
                        />
                      </Stack>
                    </div>
                  );
                })}
              </Stack>
            </Stack>
          </div>
        );
      }}
    />
  );
}